import React from 'react';
import styled from 'styled-components';

const ResponsiveBoxWrapper = styled.div`
	width: 1024px;
	margin: 0 auto;
	padding: 0 10px;

	@media (max-width: 1024px) {
		width: 768px;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export type ResponsiveBoxProps = React.ComponentPropsWithoutRef<'div'>;

const ResponsiveFC = (
	props: Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>,
	ref: React.ForwardedRef<HTMLDivElement>
) => {
	const {children} = props;
	return (
		<ResponsiveBoxWrapper ref={ref} {...props}>
			{children}
		</ResponsiveBoxWrapper>
	);
};
const ResponsiveBox = React.forwardRef<HTMLDivElement, ResponsiveBoxProps>(ResponsiveFC);

export default ResponsiveBox;
