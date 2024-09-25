export default function Video({ src }: { src: string }) {
  return (
    <p>
      <video
        src={src}
        preload="auto"
        controls
        disablePictureInPicture
        controlsList="nodownload noremoteplayback noplaybackrate"
        className="w-full bg-slate-500"
      ></video>
    </p>
  )
}
