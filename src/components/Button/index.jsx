import { Wrapper } from './ButtonStyles';

function Button({ text, callback }) {
	return (
		<Wrapper type="button" onClick={callback}>
			{text}
		</Wrapper>
	);
}

export default Button;
