import { notFound } from 'next/navigation';
import Site from '@/components/Site';
import { pageMeta, canonical } from '@/lib/metadata';
const slugs=Object.keys(pageMeta).filter(x=>x!=='home');
export function generateStaticParams(){return slugs.map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const info=pageMeta[slug];if(!info)return {};return {title:info.title,description:info.description,alternates:{canonical:canonical(slug)},openGraph:{title:info.title,description:info.description,url:canonical(slug),siteName:'Vehicle Scrapping Yard',type:'website'},twitter:{card:'summary_large_image',title:info.title,description:info.description}}}
export default async function ContentPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!pageMeta[slug])notFound();return <Site slug={slug}/>}
