'use client';

import { useState, useEffect } from 'react';
import Auth from '@/components/Auth';
import PetProfile, { Pet } from '@/components/PetProfile';

export default function PerfilPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);
  const [pets, setPets] = useState<Pet[]>([]);

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    const storedPets = localStorage.getItem('pets');
    
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      setIsAuthenticated(true);
      setCurrentUser(authData);
    }
    
    if (storedPets) {
      setPets(JSON.parse(storedPets));
    } else {
      // Datos demo - actualizar con fecha real
      const today = new Date().toISOString().split('T')[0];
      const demoPets: Pet[] = [
        {
          id: '1',
          name: 'Max',
          species: 'Perro',
          breed: 'Golden Retriever',
          age: 3,
          weight: 28.5,
          color: 'Dorado',
          planType: 'premium',
          planStartDate: today,
          vaccinations: [],
          medicalHistory: [],
          emergencyContact: {
            name: 'Juan Pérez',
            phone: '+57 321 4349583',
            relationship: 'Dueño'
          }
        }
      ];
      setPets(demoPets);
      localStorage.setItem('pets', JSON.stringify(demoPets));
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Demo login
    if (email === 'demo@mimascotasegura.com' && password === 'demo123') {
      const user = { email, name: 'Usuario Demo' };
      setCurrentUser(user);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify(user));
    } else {
      alert('Credenciales inválidas. Usa las credenciales demo.');
    }
  };

  const handleRegister = (email: string, password: string, name: string) => {
    const user = { email, name };
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem('auth', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('auth');
  };

  const handleAddPet = (pet: Omit<Pet, 'id'>) => {
    const newPet: Pet = {
      ...pet,
      id: Date.now().toString()
    };
    const updatedPets = [...pets, newPet];
    setPets(updatedPets);
    localStorage.setItem('pets', JSON.stringify(updatedPets));
  };

  const handleUpdatePet = (id: string, updatedData: Partial<Pet>) => {
    const updatedPets = pets.map(pet =>
      pet.id === id ? { ...pet, ...updatedData } : pet
    );
    setPets(updatedPets);
    localStorage.setItem('pets', JSON.stringify(updatedPets));
  };

  const handleDeletePet = (id: string) => {
    const updatedPets = pets.filter(pet => pet.id !== id);
    setPets(updatedPets);
    localStorage.setItem('pets', JSON.stringify(updatedPets));
  };

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} onRegister={handleRegister} />;
  }

  return (
    <PetProfile
      pets={pets}
      onAddPet={handleAddPet}
      onUpdatePet={handleUpdatePet}
      onDeletePet={handleDeletePet}
      onLogout={handleLogout}
      userName={currentUser?.name || 'Usuario'}
    />
  );
}
