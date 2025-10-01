'use client';

import { useState } from 'react';
import Image from 'next/image';

interface AuthProps {
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, name: string) => void;
}

const Auth = ({ onLogin, onRegister }: AuthProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(formData.email, formData.password);
    } else {
      onRegister(formData.email, formData.password, formData.name);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Image 
              src="/recursos/logoms.jpeg" 
              alt="Logo" 
              width={60} 
              height={60}
              className="rounded-full"
            />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </h2>
          <p className="text-slate-600">
            {isLogin ? 'Accede a tu cuenta' : 'Crea tu cuenta gratuita'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required={!isLogin}
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="••••••••"
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>

        {/* Demo credentials */}
        <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
          <p className="text-xs text-emerald-800 font-semibold mb-2">Demo (prueba rápida):</p>
          <p className="text-xs text-emerald-700">Email: demo@mimascotasegura.com</p>
          <p className="text-xs text-emerald-700">Contraseña: demo123</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
