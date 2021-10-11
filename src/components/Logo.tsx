import { ClassAttributes, ImgHTMLAttributes } from "react";

const Logo = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      alt="Logo"
      src="/static/logo.svg"
      {...props}
    />
  );
  
  export default Logo;
  