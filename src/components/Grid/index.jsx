import { Wrapper, Content } from './GridStyles';

function Grid({header, children}) {
	return (
		<Wrapper>
      <h1>{header}</h1>
			<Content>{children}</Content>
		</Wrapper>
	);
}

export default Grid;
