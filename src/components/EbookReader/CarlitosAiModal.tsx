import React, { useState } from 'react';
import { Sparkles, X, Send, BookOpen, RefreshCw } from 'lucide-react';
import { MedallionBustIcon } from '../VintageSvgIcons';
import { OrnamentalDivider } from '../OrnamentalDivider';

interface Message {
  sender: 'user' | 'carlitos';
  text: string;
}

interface CarlitosAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPageTitle?: string;
  currentPageNumber?: number;
}

export const CarlitosAiModal: React.FC<CarlitosAiModalProps> = ({
  isOpen,
  onClose,
  currentPageTitle,
  currentPageNumber,
}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'carlitos',
      text: `¡Hola! Soy Carlitos. Me da gusto encontrarte en la página ${currentPageNumber || 1}. Como viejo amigo y compañero de estudio de la psique, dime: ¿qué duda o inquietud sobre los arquetipos, los sueños, la sombra o el proceso de individuación quieres explorar hoy conmigo?`,
    },
  ]);

  if (!isOpen) return null;

  const sampleQuestions = [
    '¿Cómo diferencio un símbolo de un simple signo?',
    '¿Qué hago si me siento abrumado por mi Sombra?',
    '¿Cómo sé si estoy proyectando mi Anima o Animus?',
    '¿Cuál es la diferencia entre el inconsciente personal y el colectivo?',
  ];

  const handleSend = async (queryToSend?: string) => {
    const text = (queryToSend || inputQuery).trim();
    if (!text || loading) return;

    const userMsg: Message = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!queryToSend) setInputQuery('');
    setLoading(true);

    try {
      // Attempt server API request first
      const res = await fetch('/api/carlitos-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: text,
          pageContext: `El lector está actualmente en la página ${currentPageNumber}: ${currentPageTitle}`,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          setMessages((prev) => [...prev, { sender: 'carlitos', text: data.reply }]);
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      // Fallback to intelligent local response engine below
    }

    // Local Jungian Carlitos Engine Fallback
    setTimeout(() => {
      let carlitosReply = '';
      const lower = text.toLowerCase();

      if (lower.includes('símbolo') || lower.includes('signo')) {
        carlitosReply =
          'Verás, querido amigo: un signo es una señal de tránsito cerrada ("PARE"), que te dice exactamente algo ya conocido. Un símbolo, en cambio, es la mejor expresión posible de algo numinoso e inaccesible al intelecto puro. No intentes "resolver" un símbolo como si fuera una ecuación; habítalo y deja que transforme tu conciencia.';
      } else if (lower.includes('sombra')) {
        carlitosReply =
          'Tu sombra es el 90% del oro puro que no te has atrevido a usar. Aquello que tanto te irrita en los demás es la pista de lo que reprimiste en ti. No la combateis con látigos morales; siéntate a tomar un café con ella y pregúntale qué talento valioso tiene encerrado.';
      } else if (lower.includes('sueño') || lower.includes('sueños')) {
        carlitosReply =
          'Un sueño no viene a engañarte ni a esconderte nada. Es un producto de la naturaleza espontánea, igual que una flor o una piedra. Su función es compensar la postura engreída o unilateral de tu Yo consciente durante el día. Si de día actúas como un rey infalible, de noche soñarás que tropiezas.';
      } else if (lower.includes('proyección') || lower.includes('proyectar')) {
        carlitosReply =
          'La proyección es una transferencia involuntaria de tu propia psique sobre el mundo exterior. Siempre que sientas una fascinación ciega o un odio visceral hacia alguien, estás viendo tu propio rostro reflejado en el cristal de su persona. El verdadero trabajo ético es retirar esa proyección.';
      } else if (lower.includes('individua') || lower.includes('desarrollo')) {
        carlitosReply =
          'La individuación no es volverse un súper humano ni alcanzar un estado de felicidad ingenua sin problemas. Es llegar a ser la totalidad integrada que potencialmente eres: aceptar tus opuestos, luz y oscuridad, y sostener la tensión consciente entre ambos.';
      } else {
        carlitosReply = `Esa es una pregunta profunda sobre la que hemos reflexionado mucho en nuestras obras. Respecto a "${text}", te diría lo siguiente: en la psique no hay atajos intelectuales. Todo conflicto que experimentas exteriormente es el reflejo de una tensión de opuestos buscando su función trascendente en tu interior. Observa qué parte de ti reclama ser escuchada sin juzgarla.`;
      }

      setMessages((prev) => [...prev, { sender: 'carlitos', text: carlitosReply }]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#120e0a]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#dfceaa] border-4 border-[#120e0a] w-full max-w-2xl p-4 sm:p-6 shadow-2xl relative paper-card max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#120e0a]">
          <div className="flex items-center gap-3">
            <MedallionBustIcon className="w-8 h-8 text-[#5d4025]" />
            <div>
              <span className="font-signature text-xl text-[#5d4025] block -mb-1">
                Diálogo en la Penumbra
              </span>
              <h2 className="font-playfair text-lg sm:text-xl font-extrabold text-[#120e0a] uppercase">
                Consultar a "Carlitos" (Asistente Junguiano)
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-[#120e0a] hover:text-[#efe2c8] transition-all cursor-pointer border border-[#120e0a]"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Context Subtitle */}
        {currentPageTitle && (
          <div className="my-2 p-2 bg-[#d8c29b] border border-[#120e0a]/40 font-mono text-[11px] text-[#4a2e19] flex items-center justify-between">
            <span>Contexto actual: Página {currentPageNumber}</span>
            <span className="font-bold truncate max-w-[250px]">{currentPageTitle}</span>
          </div>
        )}

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto my-3 space-y-4 pr-1 p-2 bg-[#efe2c8]/60 border border-[#120e0a]/30 rounded-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                m.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] p-3.5 border font-old-standard text-xs sm:text-sm leading-relaxed shadow-sm ${
                  m.sender === 'user'
                    ? 'bg-[#1a120b] text-[#efe2c8] border-[#1a120b] rounded-tl-md rounded-tr-xs rounded-bl-md'
                    : 'bg-[#e8d7b5] text-[#120e0a] border-[#4a2e19] rounded-tr-md rounded-tl-xs rounded-br-md font-cormorant italic text-base sm:text-lg font-semibold'
                }`}
              >
                {m.sender === 'carlitos' && (
                  <div className="font-playfair not-italic font-bold text-xs uppercase text-[#5d4025] mb-1 pb-1 border-b border-[#4a2e19]/20">
                    Carlitos te diría:
                  </div>
                )}
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs font-mono text-[#5d4025] italic">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Carlitos está meditando en su pipa de tabaco...</span>
            </div>
          )}
        </div>

        {/* Quick Sample Questions */}
        <div className="my-2 flex flex-wrap gap-1.5">
          {sampleQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="text-[10px] font-mono bg-[#d8c29b] hover:bg-[#c9b28a] text-[#120e0a] border border-[#120e0a]/40 px-2 py-1 text-left cursor-pointer transition-all"
            >
              • {q}
            </button>
          ))}
        </div>

        {/* Query Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="pt-2 border-t border-[#120e0a]/30 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Pregúntale a Carlitos sobre los contenidos del e-book..."
            className="flex-1 p-2.5 bg-[#efe2c8] border-2 border-[#120e0a] font-old-standard text-xs sm:text-sm text-[#120e0a] focus:outline-none focus:ring-2 focus:ring-[#5d4025]"
          />

          <button
            type="submit"
            disabled={loading || !inputQuery.trim()}
            className="px-4 py-2.5 bg-[#120e0a] text-[#efe2c8] font-playfair font-bold text-xs uppercase hover:bg-[#382618] disabled:opacity-40 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Enviar</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
