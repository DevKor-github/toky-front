'use client';

import ResponsiveBox from '@/components/common/ResponsiveBox';
import styled from 'styled-components';
import React from 'react';
import {useEffect, useState} from 'react';
import TopBar from '@/components/common/TopBar';

const Box = styled(ResponsiveBox)`
	background-color: #121212;
	padding-top: 48px;
`;

export default function Test() {
	return (
		<Box>
			<TopBar />
		</Box>
	);
}
