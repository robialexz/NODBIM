-- Aliniaza formularul public: telefon optional si companie optionala.
-- Aplicata pe proiectul de productie in 20 noiembrie 2026.
-- Idempotenta. Datele existente si politicile de acces se pastreaza.
ALTER TABLE public.leads ALTER COLUMN phone DROP NOT NULL;

ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS company text;
