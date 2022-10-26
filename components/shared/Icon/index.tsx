interface IconProps {
  path: string;
  width?: number | 16;
  height?: number | 16;
}

const Icon = (props: IconProps) => {
  const { path, width, height } = props;

  return (
    <img src={path} width={width} height={height} />
  );
}

export default Icon;

