import type { APIRoute } from 'astro';
import { homeMarkdown, markdownResponse } from '@/lib/agent-markdown';

export const GET: APIRoute = () => markdownResponse(homeMarkdown('es'));
