import { useState } from 'react'
import { ChevronDown, ChevronUp, MessageCircle, Send } from 'lucide-react'
import { chatService } from '../services/chatService'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      bot: true,
      text: "Hi! I'm your assistant. Ask me about available stays, amenities, locations, or pricing.",
    },
  ])
  const [loading, setLoading] = useState(false)
  const send = async () => {
    if (!input.trim() || loading) return
    const text = input.trim()
    setInput('')
    setMessages((all) => [...all, { text }])
    setLoading(true)
    try {
      const data = await chatService.send(
        text,
        localStorage.getItem('conversationId'),
      )
      if (data.conversationId)
        localStorage.setItem('conversationId', data.conversationId)
      setMessages((all) => [...all, { bot: true, text: data.response }])
    } catch {
      setMessages((all) => [
        ...all,
        {
          bot: true,
          text: 'I am having trouble connecting. Please try again.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="chatbot">
      {open ? (
        <div className="chat-window">
          <div className="chat-head">
            <div>
              <MessageCircle size={20} />
              <b>Stavio Assistant</b>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Minimize chatbot"
            >
              <ChevronDown size={20} />
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((item, index) => (
              <div
                className={item.bot ? 'chat-message bot' : 'chat-message user'}
                key={index}
              >
                {item.text}
              </div>
            ))}
            {loading && <div className="chat-message bot">Thinking...</div>}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && send()}
              placeholder="Ask about listings..."
            />
            <button onClick={send} aria-label="Send message">
              <Send size={17} />
            </button>
          </div>
        </div>
      ) : (
        <button className="chat-preview" onClick={() => setOpen(true)}>
          <span>
            <MessageCircle size={20} />
            <b>Need help?</b>
            <small>Chat with us</small>
          </span>
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  )
}
