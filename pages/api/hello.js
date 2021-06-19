export default function helloHandler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
