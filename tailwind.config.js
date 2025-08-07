/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Purple & Vibrant Pink Palette
        'deep-purple': '#4A148C',
        'royal-purple': '#6A1B9A',
        'vibrant-pink': '#E91E63',
        'rose-pink': '#F8BBD9',
        'hot-pink': '#FF1744',
        'soft-lavender': '#E1BEE7',
        'golden-accent': '#FFD700',
        'soft-ivory': '#FEF9E7',
        // Legacy colors for gradual transition
        'golden-light': '#F4D03F',
        'earth-copper': '#B7950B',
        'deep-rose': '#E91E63',
        'warm-gold': '#FFD700',
      },
      fontFamily: {
        'serif': ['Poppins', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        // New Deep Purple & Vibrant Pink Gradients
        'gradient-primary': 'linear-gradient(135deg, #4A148C 0%, #E91E63 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #6A1B9A 0%, #FF1744 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FFD700 0%, #E91E63 100%)',
        'gradient-sacred': 'linear-gradient(135deg, #FEF9E7 0%, #E1BEE7 50%, #F8BBD9 100%)',
        'gradient-card': 'linear-gradient(135deg, #4A148C 0%, #6A1B9A 50%, #E91E63 100%)',
        // Legacy gradients for transition
        'gradient-rose': 'linear-gradient(135deg, #F8BBD9 0%, #E91E63 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F4D03F 0%, #B7950B 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0)' },
          '50%': { transform: 'translate3d(0, -20px, 0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #F8BBD9' },
          '100%': { boxShadow: '0 0 20px #F8BBD9, 0 0 30px #F8BBD9' },
        },
      },
    },
  },
  plugins: [],
}
