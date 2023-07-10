'use client';
import AnalyzeCheer from '@/components/analyze/AnalyzeCheer';
import AnalyzeList from '@/components/analyze/AnalyzeList';
import AnalyzeNavBar from '@/components/analyze/AnalyzeNavBar';
import AnalyzeHome from '@/components/analyze/AnaylzeHome';
import NavigationBar from '@/components/common/NavigationBar';

export default function Analyze() {
	return (
		<div style={{position: 'relative'}}>
			<NavigationBar />
			<AnalyzeNavBar />
			<AnalyzeHome />
			<AnalyzeList />
			<AnalyzeCheer />
		</div>
	);
}
