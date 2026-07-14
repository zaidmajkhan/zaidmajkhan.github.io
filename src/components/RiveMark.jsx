import { useRive } from "@rive-app/react-canvas";

/** Rive mount — replace `/assets/motion.riv` with your own file from the Rive editor. */
export default function RiveMark({ src = "/assets/motion.riv", className = "" }) {
  const { RiveComponent } = useRive({
    src,
    autoplay: true,
  });

  return (
    <div className={className}>
      <RiveComponent className="h-full w-full" />
    </div>
  );
}
