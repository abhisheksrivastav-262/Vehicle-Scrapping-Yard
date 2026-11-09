import type { MetadataRoute } from 'next';
import { pageMeta, canonical } from '@/lib/metadata';
export default function sitemap():MetadataRoute.Sitemap{return Object.keys(pageMeta).map(slug=>({url:canonical(slug==='home'?'':slug),lastModified:new Date(),changeFrequency:'monthly',priority:slug==='home'?1:0.7}))}
