import hello from "@entry/ui";
import { theme } from "@entry/design-token";

export const App = () => {
  console.log(hello);

  return (
    <div
      style={{
        color: theme.color.orange[500],
      }}
    >
      Hello world
    </div>
  );
};
