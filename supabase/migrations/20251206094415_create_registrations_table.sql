/*
  # Create registrations table for Hyderabad Flute Festival

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key) - Unique registration ID
      - `user_id` (uuid, foreign key) - Links to auth.users
      - `full_name` (text) - Participant's full name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone number
      - `registration_type` (text) - 'participant' or 'watcher'
      - `message` (text, optional) - Additional message or notes
      - `created_at` (timestamptz) - Registration timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `registrations` table
    - Policy: Authenticated users can insert their own registrations
    - Policy: Authenticated users can view their own registrations
    - Policy: Authenticated users can update their own registrations
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  registration_type text NOT NULL CHECK (registration_type IN ('participant', 'watcher')),
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own registrations"
  ON registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own registrations"
  ON registrations
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_registrations_user_id ON registrations(user_id);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC);