-- Create leads table for contact form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  project_requirement TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for contact form)
CREATE POLICY "Anyone can submit a lead" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users (admin) can view leads
CREATE POLICY "Only authenticated users can view leads" 
ON public.leads 
FOR SELECT 
USING (auth.uid() IS NOT NULL);