
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // PEAXIS brand — light theme
        'px-bg':       '#F8FAFC',
        'px-surface':  '#FFFFFF',
        'px-card':     '#FFFFFF',
        'px-teal':     '#00B8B3',
        'px-teal-lt':  '#E6FAF9',
        'px-coral':    '#FE595A',
        'px-coral-lt': '#FFF0F0',
        'px-yellow':   '#FEC849',
        'px-yellow-lt':'#FFFBEB',
        'px-navy':     '#001027',
        'px-navy-lt':  '#0E2A47',
        'px-muted':    '#6B7280',
        // PEAXIS product UI (apps/web tokens)
        'a-bg': '#F8FAFC', 'a-fg': '#0A1120', 'a-primary': '#029090', 'a-accent': '#E8FBFA',
        'a-muted': '#F1F5F9', 'a-mfg': '#64748B', 'a-border': '#E2E8F0',
        'a-ok': '#047857', 'a-ok-s': '#ECFDF5', 'a-warn': '#B45309', 'a-warn-s': '#FFFBEB',
        'a-info': '#0369A1', 'a-info-s': '#F0F9FF', 'a-bad': '#DC2626', 'a-bad-s': '#FEF2F2',
        'px-border':   'rgba(0,0,0,0.08)',
        'px-border-md':'rgba(0,0,0,0.12)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        app: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-teal':  'linear-gradient(135deg, #00B8B3, #44C4F6)',
        'gradient-coral': 'linear-gradient(135deg, #FE595A, #FEC849)',
        'gradient-navy':  'linear-gradient(135deg, #001027, #0E2A47)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-med':  'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
