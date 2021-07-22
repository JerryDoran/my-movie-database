import { Wrapper, Image } from './ActorStyles';

function Actor({ name, character, imageUrl }) {
	return (
		<Wrapper>
			<Image src={imageUrl} alt="actor-thumb" />
			<h3>{name}</h3>
			<p>{character}</p>
		</Wrapper>
	);
}

export default Actor;
