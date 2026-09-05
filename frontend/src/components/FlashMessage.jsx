export default function FlashMessage({ message, type = 'success' }) {
  return message ? (
    <div className={`flash-message ${type}`}>{message}</div>
  ) : null
}
