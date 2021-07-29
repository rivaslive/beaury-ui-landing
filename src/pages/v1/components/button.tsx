import React from 'react';

// components
import Layout from 'components/Molecules/Layout';
import Title from 'components/Atoms/Title';

interface IProps {}

const ButtonPage = (props: IProps) => {
	return <Layout>
		<Title>Building...</Title>
	</Layout>;
};

export default React.memo(ButtonPage);
