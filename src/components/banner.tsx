import { Text } from "./text/mainTexts";

export function Banner() {
  return (
    <>
      <div className="banner-title">
        <h2>Olá, me chamo <span>Vitor</span></h2>
        <h2>e sou dev <span>Front-end</span></h2>
      </div>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero
        felis, tempor nec lacus ut, semper mollis mauris. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Morbi at lacus eu velit egestas
        viverra ac quis nunc. Curabitur imperdiet nisl fermentum.
      </Text>
    </>
  );
}
