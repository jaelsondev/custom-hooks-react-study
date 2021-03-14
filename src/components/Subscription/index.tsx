import { useMousePosition } from "../../hooks/useMousePosition";

function Subscription() {
  const position = useMousePosition();
  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
}

export default Subscription;
