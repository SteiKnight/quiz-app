import React from "react";

interface SpinnerProps {
  width?: number;
  diameter?: number;
  duration?: number;
  easing?: string;
  color?: string;
}

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const spinnerDefaultProps: Required<SpinnerProps> = {
  width: 10,
  diameter: 200,
  duration: 1000,
  easing: "ease-out",
  color: "black",
};

const Spinner: React.FC<SpinnerProps & DivProps> = (props) => {
  const { width, diameter, duration, easing, color, ...rest } = {
    ...spinnerDefaultProps,
    ...props,
  };

  const radius = diameter / 2;

  const [deg] = React.useState(0);

  const arc = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    arc.current!.animate(
      [
        {
          transform: `rotate(0deg)`,
        },
        {
          transform: `rotate(360deg)`,
        },
      ],
      {
        duration,
        iterations: Infinity,
        easing,
      }
    );
  }, []);

  return (
    <div
      ref={arc}
      {...rest}
      style={{
        ...rest.style,
        height: radius,
        width: diameter,
        overflow: "hidden",
        transform: `rotate(${deg}deg)`,
        transformOrigin: `50% 100%`,
      }}
    >
      <div
        style={{
          height: diameter,
          width: diameter,
          borderRadius: "50%",
          border: `${width}px solid ${color}`,
        }}
      />
    </div>
  );
};

export default Spinner;
