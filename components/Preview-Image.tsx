export default function PreviewImage({ url }: { url: string }) {
  return <img src={url} className="w-full h-full object-cover" alt="Preview"  />;
}