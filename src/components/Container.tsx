import * as React from "react";

type ContainerProperties = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProperties) => {
  return <div style={props.styles}>Text Goes In Here</div>;
};
