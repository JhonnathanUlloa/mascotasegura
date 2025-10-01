'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  color: string;
  photo?: string;
  planType: 'basic' | 'premium' | 'vip';
  planStartDate: string;
  vaccinations: {
    name: string;
    date: string;
    nextDate: string;
  }[];
  medicalHistory: {
    date: string;
    condition: string;
    treatment: string;
  }[];
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
}

interface PetProfileProps {
  pets: Pet[];
  onAddPet: (pet: Omit<Pet, 'id'>) => void;
  onUpdatePet: (id: string, pet: Partial<Pet>) => void;
  onDeletePet: (id: string) => void;
  onLogout: () => void;
  userName: string;
}

const PetProfile = ({ pets, onAddPet, onUpdatePet, onDeletePet, onLogout, userName }: PetProfileProps) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(pets[0] || null);
  const [editMode, setEditMode] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  
  // Estados para agregar vacunas e historial
  const [showAddVaccination, setShowAddVaccination] = useState(false);
  const [showAddMedicalHistory, setShowAddMedicalHistory] = useState(false);
  
  const [newVaccination, setNewVaccination] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0],
    nextDate: ''
  });
  
  const [newMedicalRecord, setNewMedicalRecord] = useState({
    date: new Date().toISOString().split('T')[0],
    condition: '',
    treatment: ''
  });

  const [newPet, setNewPet] = useState<Omit<Pet, 'id'>>({
    name: '',
    species: 'Perro',
    breed: '',
    age: 0,
    weight: 0,
    color: '',
    planType: 'basic',
    planStartDate: new Date().toISOString().split('T')[0],
    vaccinations: [],
    medicalHistory: [],
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editMode && selectedPet) {
      setSelectedPet({
        ...selectedPet,
        [name]: name === 'age' || name === 'weight' ? parseFloat(value) : value
      });
    } else {
      setNewPet({
        ...newPet,
        [name]: name === 'age' || name === 'weight' ? parseFloat(value) : value
      });
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const photoData = reader.result as string;
        setPhotoPreview(photoData);
        if (editMode && selectedPet) {
          setSelectedPet({ ...selectedPet, photo: photoData });
        } else {
          setNewPet({ ...newPet, photo: photoData });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddVaccination = () => {
    if (!selectedPet || !newVaccination.name) return;
    
    const updatedPet = {
      ...selectedPet,
      vaccinations: [...selectedPet.vaccinations, newVaccination]
    };
    setSelectedPet(updatedPet);
    onUpdatePet(selectedPet.id, updatedPet);
    setNewVaccination({
      name: '',
      date: new Date().toISOString().split('T')[0],
      nextDate: ''
    });
    setShowAddVaccination(false);
  };

  const handleDeleteVaccination = (index: number) => {
    if (!selectedPet) return;
    const updatedVaccinations = selectedPet.vaccinations.filter((_, i) => i !== index);
    const updatedPet = { ...selectedPet, vaccinations: updatedVaccinations };
    setSelectedPet(updatedPet);
    onUpdatePet(selectedPet.id, updatedPet);
  };

  const handleAddMedicalRecord = () => {
    if (!selectedPet || !newMedicalRecord.condition) return;
    
    const updatedPet = {
      ...selectedPet,
      medicalHistory: [...selectedPet.medicalHistory, newMedicalRecord]
    };
    setSelectedPet(updatedPet);
    onUpdatePet(selectedPet.id, updatedPet);
    setNewMedicalRecord({
      date: new Date().toISOString().split('T')[0],
      condition: '',
      treatment: ''
    });
    setShowAddMedicalHistory(false);
  };

  const handleDeleteMedicalRecord = (index: number) => {
    if (!selectedPet) return;
    const updatedHistory = selectedPet.medicalHistory.filter((_, i) => i !== index);
    const updatedPet = { ...selectedPet, medicalHistory: updatedHistory };
    setSelectedPet(updatedPet);
    onUpdatePet(selectedPet.id, updatedPet);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editMode && selectedPet) {
      onUpdatePet(selectedPet.id, selectedPet);
      setEditMode(false);
      setPhotoPreview('');
    } else {
      onAddPet(newPet);
      setShowAddForm(false);
      setPhotoPreview('');
      setNewPet({
        name: '',
        species: 'Perro',
        breed: '',
        age: 0,
        weight: 0,
        color: '',
        planType: 'basic',
        planStartDate: new Date().toISOString().split('T')[0],
        vaccinations: [],
        medicalHistory: [],
        emergencyContact: {
          name: '',
          phone: '',
          relationship: ''
        }
      });
    }
  };

  const getPlanName = (plan: string) => {
    switch (plan) {
      case 'basic': return 'Plan Básico';
      case 'premium': return 'Plan Premium';
      case 'vip': return 'Plan VIP';
      default: return plan;
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'basic': return 'from-blue-500 to-blue-600';
      case 'premium': return 'from-purple-500 to-purple-600';
      case 'vip': return 'from-amber-500 to-amber-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <Image 
                  src="/recursos/logoms.jpeg" 
                  alt="Logo" 
                  width={50} 
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Mi Mascota Segura</h1>
                <p className="text-slate-600">Bienvenido, {userName}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                <span>+</span>
                <span>Agregar Mascota</span>
              </button>
              <button
                onClick={onLogout}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Salir
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Lista de mascotas */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Mis Mascotas</h2>
              <div className="space-y-3">
                {pets.length === 0 ? (
                  <p className="text-slate-500 text-sm text-center py-4">
                    No tienes mascotas registradas
                  </p>
                ) : (
                  pets.map((pet) => (
                    <button
                      key={pet.id}
                      onClick={() => {
                        setSelectedPet(pet);
                        setEditMode(false);
                        setPhotoPreview('');
                        setShowAddVaccination(false);
                        setShowAddMedicalHistory(false);
                      }}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                        selectedPet?.id === pet.id
                          ? 'bg-emerald-100 border-2 border-emerald-500'
                          : 'bg-slate-50 hover:bg-slate-100 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-2xl overflow-hidden">
                          {pet.photo ? (
                            <img 
                              src={pet.photo} 
                              alt={pet.name} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span>{pet.species === 'Perro' ? '🐕' : pet.species === 'Gato' ? '🐈' : '🐾'}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{pet.name}</p>
                          <p className="text-xs text-slate-600">{pet.breed}</p>
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            {showAddForm || editMode ? (
              /* Formulario de agregar/editar mascota */
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  {editMode ? 'Editar Mascota' : 'Agregar Nueva Mascota'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Foto de mascota */}
                  <div className="flex flex-col items-center mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-4">
                      Foto de tu mascota
                    </label>
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-100 border-4 border-emerald-200 flex items-center justify-center">
                        {(photoPreview || (editMode && selectedPet?.photo)) ? (
                          <img 
                            src={photoPreview || selectedPet?.photo} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-5xl">
                            {(editMode ? selectedPet?.species : newPet.species) === 'Perro' ? '🐕' : 
                             (editMode ? selectedPet?.species : newPet.species) === 'Gato' ? '🐈' : '🐾'}
                          </span>
                        )}
                      </div>
                      <label className="absolute bottom-0 right-0 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full cursor-pointer transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </label>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Click en el ícono de cámara para subir una foto</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={editMode ? selectedPet?.name : newPet.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        placeholder="Nombre de tu mascota"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Especie *
                      </label>
                      <select
                        name="species"
                        required
                        value={editMode ? selectedPet?.species : newPet.species}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                        <option value="Ave">Ave</option>
                        <option value="Conejo">Conejo</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Raza *
                      </label>
                      <input
                        type="text"
                        name="breed"
                        required
                        value={editMode ? selectedPet?.breed : newPet.breed}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        placeholder="Raza"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Edad (años) *
                      </label>
                      <input
                        type="number"
                        name="age"
                        required
                        min="0"
                        step="0.1"
                        value={editMode ? selectedPet?.age : newPet.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        placeholder="Edad"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Peso (kg) *
                      </label>
                      <input
                        type="number"
                        name="weight"
                        required
                        min="0"
                        step="0.1"
                        value={editMode ? selectedPet?.weight : newPet.weight}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        placeholder="Peso"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Color *
                      </label>
                      <input
                        type="text"
                        name="color"
                        required
                        value={editMode ? selectedPet?.color : newPet.color}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        placeholder="Color predominante"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Tipo de Plan *
                      </label>
                      <select
                        name="planType"
                        required
                        value={editMode ? selectedPet?.planType : newPet.planType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="basic">Plan Básico</option>
                        <option value="premium">Plan Premium</option>
                        <option value="vip">Plan VIP</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Fecha de inicio del plan *
                      </label>
                      <input
                        type="date"
                        name="planStartDate"
                        required
                        value={editMode ? selectedPet?.planStartDate : newPet.planStartDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      {editMode ? 'Guardar Cambios' : 'Agregar Mascota'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddForm(false);
                        setEditMode(false);
                        setPhotoPreview('');
                      }}
                      className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            ) : selectedPet ? (
              /* Perfil de mascota seleccionada */
              <div className="space-y-6">
                {/* Info básica */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-emerald-200 rounded-full flex items-center justify-center text-5xl overflow-hidden border-4 border-emerald-300">
                        {selectedPet.photo ? (
                          <img 
                            src={selectedPet.photo} 
                            alt={selectedPet.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span>{selectedPet.species === 'Perro' ? '🐕' : selectedPet.species === 'Gato' ? '🐈' : '🐾'}</span>
                        )}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-slate-800">{selectedPet.name}</h2>
                        <p className="text-lg text-slate-600">{selectedPet.breed}</p>
                        <div className={`inline-block mt-2 px-4 py-1 bg-gradient-to-r ${getPlanColor(selectedPet.planType)} text-white rounded-full text-sm font-semibold`}>
                          {getPlanName(selectedPet.planType)}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4 md:mt-0">
                      <button
                        onClick={() => {
                          setEditMode(true);
                          setPhotoPreview(selectedPet.photo || '');
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`¿Estás seguro de eliminar a ${selectedPet.name}?`)) {
                            onDeletePet(selectedPet.id);
                            setSelectedPet(pets.filter(p => p.id !== selectedPet.id)[0] || null);
                          }
                        }}
                        className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-slate-600 text-sm mb-1">Especie</p>
                      <p className="text-slate-800 font-bold">{selectedPet.species}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-slate-600 text-sm mb-1">Edad</p>
                      <p className="text-slate-800 font-bold">{selectedPet.age} años</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-slate-600 text-sm mb-1">Peso</p>
                      <p className="text-slate-800 font-bold">{selectedPet.weight} kg</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-slate-600 text-sm mb-1">Color</p>
                      <p className="text-slate-800 font-bold">{selectedPet.color}</p>
                    </div>
                  </div>
                </div>

                {/* Info del plan */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Información del Plan</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-slate-600 text-sm mb-1">Fecha de inicio</p>
                      <p className="text-slate-800 font-semibold">{new Date(selectedPet.planStartDate).toLocaleDateString('es-CO')}</p>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm mb-1">Estado</p>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        Activo
                      </span>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Vacunaciones */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-slate-800">Vacunaciones</h3>
                      <button
                        onClick={() => setShowAddVaccination(true)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-colors"
                      >
                        + Agregar
                      </button>
                    </div>
                    
                    {showAddVaccination && (
                      <div className="mb-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                        <h4 className="font-semibold text-slate-800 mb-3">Nueva Vacuna</h4>
                        <div className="space-y-3">
                          <input
                            type="text"
                            placeholder="Nombre de la vacuna"
                            value={newVaccination.name}
                            onChange={(e) => setNewVaccination({...newVaccination, name: e.target.value})}
                            className="w-full px-3 py-2 border border-emerald-300 rounded-lg text-sm"
                          />
                          <input
                            type="date"
                            value={newVaccination.date}
                            onChange={(e) => setNewVaccination({...newVaccination, date: e.target.value})}
                            className="w-full px-3 py-2 border border-emerald-300 rounded-lg text-sm"
                          />
                          <input
                            type="date"
                            placeholder="Próxima dosis"
                            value={newVaccination.nextDate}
                            onChange={(e) => setNewVaccination({...newVaccination, nextDate: e.target.value})}
                            className="w-full px-3 py-2 border border-emerald-300 rounded-lg text-sm"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={handleAddVaccination}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                            >
                              Guardar
                            </button>
                            <button
                              onClick={() => setShowAddVaccination(false)}
                              className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {selectedPet.vaccinations.length === 0 ? (
                      <p className="text-slate-500 text-sm">No hay vacunaciones registradas</p>
                    ) : (
                      <div className="space-y-3">
                        {selectedPet.vaccinations.map((vac, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 rounded-lg flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-slate-800">{vac.name}</p>
                              <p className="text-xs text-slate-600">Aplicada: {new Date(vac.date).toLocaleDateString('es-CO')}</p>
                              <p className="text-xs text-slate-600">Próxima: {new Date(vac.nextDate).toLocaleDateString('es-CO')}</p>
                            </div>
                            <button
                              onClick={() => handleDeleteVaccination(idx)}
                              className="text-red-600 hover:text-red-700 text-sm"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Historial Médico */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-slate-800">Historial Médico</h3>
                      <button
                        onClick={() => setShowAddMedicalHistory(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-colors"
                      >
                        + Agregar
                      </button>
                    </div>
                    
                    {showAddMedicalHistory && (
                      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-slate-800 mb-3">Nuevo Registro</h4>
                        <div className="space-y-3">
                          <input
                            type="date"
                            value={newMedicalRecord.date}
                            onChange={(e) => setNewMedicalRecord({...newMedicalRecord, date: e.target.value})}
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg text-sm"
                          />
                          <input
                            type="text"
                            placeholder="Condición o diagnóstico"
                            value={newMedicalRecord.condition}
                            onChange={(e) => setNewMedicalRecord({...newMedicalRecord, condition: e.target.value})}
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg text-sm"
                          />
                          <textarea
                            placeholder="Tratamiento o notas"
                            value={newMedicalRecord.treatment}
                            onChange={(e) => setNewMedicalRecord({...newMedicalRecord, treatment: e.target.value})}
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg text-sm"
                            rows={3}
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={handleAddMedicalRecord}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                            >
                              Guardar
                            </button>
                            <button
                              onClick={() => setShowAddMedicalHistory(false)}
                              className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {selectedPet.medicalHistory.length === 0 ? (
                      <p className="text-slate-500 text-sm">No hay historial médico registrado</p>
                    ) : (
                      <div className="space-y-3">
                        {selectedPet.medicalHistory.map((record, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 rounded-lg flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-slate-800">{record.condition}</p>
                              <p className="text-xs text-slate-600">{new Date(record.date).toLocaleDateString('es-CO')}</p>
                              <p className="text-xs text-slate-600">{record.treatment}</p>
                            </div>
                            <button
                              onClick={() => handleDeleteMedicalRecord(idx)}
                              className="text-red-600 hover:text-red-700 text-sm"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Estado vacío */
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">🐾</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No hay mascotas registradas</h3>
                <p className="text-slate-600 mb-6">Comienza agregando tu primera mascota al sistema</p>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Agregar Primera Mascota
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
