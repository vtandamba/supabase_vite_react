// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import supabase from './supabaseClient';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Nettoyage de l'écouteur lorsque le composant est démonté
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const signUp = async (email, password) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw new Error(error.message);
  };

  const signIn = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  };

  return {
    user,
    loading,
    signUp,
    signIn,
    signOut,
  };
};

export default useAuth;
