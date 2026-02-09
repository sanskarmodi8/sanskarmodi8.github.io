import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Brain, TrendingUp, Shield, BookOpen, Code, Terminal, Sparkles, Bot, Cloud } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'projects', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Leave Policy AI Agent",
      subtitle: "Production Agentic System",
      description: "Enterprise-grade AI agent on Google Cloud Run using Google ADK with ReAct pattern. Hybrid architecture: sub-100ms deterministic fast path ($0 cost) for balance/policy, agentic path for complex eligibility reasoning with multi-turn conversations.",
      tech: ["Google ADK", "FastAPI", "Snowflake", "Docker", "Cloud Run"],
      highlights: ["99.9% uptime on Cloud Run", "3 custom tools + auto selection", "80%+ test coverage", "Circuit breaker resilience"],
      liveUrl: "https://leave-policy-agent-641772618787.us-central1.run.app/docs",
      githubUrl: "https://github.com/sanskarmodi8/leave-policy-agent",
      icon: Bot,
      color: "#8b5cf6",
      featured: true
    },
    {
      title: "AtlasRAG",
      subtitle: "Production RAG System",
      description: "Hybrid retrieval pipeline combining vector search, BM25, and concept co-occurrence graphs for citation-aware document QA with proven 100% recall.",
      tech: ["FastAPI", "LangChain", "NetworkX", "Qdrant", "Next.js"],
      highlights: ["Recall@5 = 1.00", "Graph-based expansion", "Citation attribution"],
      liveUrl: "https://atlas-rag.vercel.app/",
      githubUrl: "https://github.com/sanskarmodi8/Atlas-RAG",
      icon: BookOpen,
      color: "#10b981"
    },
    {
      title: "Brain Tumor Segmentation",
      subtitle: "Medical AI System",
      description: "Multi-modal MRI segmentation using Swin UNETR trained on 40GB BraTS dataset with 3D visualization and 99.94% accuracy.",
      tech: ["PyTorch", "MONAI", "Streamlit", "DVC"],
      highlights: ["99.94% accuracy", "Multi-modal MRI", "Production pipeline"],
      liveUrl: "https://sanskarmodi8-brain-tumor-segmentation-app-v4gu5u.streamlit.app/",
      githubUrl: "https://github.com/sanskarmodi8/brain_tumor_segmentation",
      icon: Brain,
      color: "#f59e0b"
    },
    {
      title: "MarketMind",
      subtitle: "RL Trading System",
      description: "Autonomous Bitcoin trading bot using PPO algorithm with MLflow tracking, achieving 204% returns vs 124% baseline with automated weekly retraining.",
      tech: ["PyTorch", "Stable-Baselines3", "MLflow", "DVC"],
      highlights: ["204% vs 124% baseline", "Auto retraining", "MLflow tracking"],
      liveUrl: "https://marketmind-sanskarmodi.streamlit.app/",
      githubUrl: "https://github.com/sanskarmodi8/MarketMind",
      icon: TrendingUp,
      color: "#3b82f6"
    },
    {
      title: "DeepDetect",
      subtitle: "Deepfake Detection",
      description: "Video-based deepfake detection with visual explainability using heatmaps, achieving 93% F1 score with real-time processing capabilities.",
      tech: ["PyTorch", "OpenCV", "MediaPipe", "Gradio"],
      highlights: ["93% F1 score", "Visual heatmaps", "Real-time detection"],
      liveUrl: "https://huggingface.co/spaces/SanskarModi/DeepDetect",
      githubUrl: "https://github.com/sanskarmodi8/DeepDetect",
      icon: Shield,
      color: "#ef4444"
    }
  ];

  const skills = [
    { 
      category: "LLM & Agentic AI", 
      items: ["Google ADK", "LangChain", "RAG Systems", "Tool Orchestration", "LiteLLM", "ReAct Pattern"], 
      color: "#8b5cf6" 
    },
    { 
      category: "Machine Learning", 
      items: ["Deep Learning", "Computer Vision", "Reinforcement Learning", "NLP", "PyTorch"], 
      color: "#3b82f6" 
    },
    { 
      category: "Production & Cloud", 
      items: ["FastAPI", "Docker", "Google Cloud Run", "Azure Portal", "HuggingFace", "Streamlit", "Gradio"], 
      color: "#10b981" 
    },
    { 
      category: "MLOps & Tools", 
      items: ["MLflow", "DVC", "Git", "CI/CD", "Linux"], 
      color: "#f59e0b" 
    }
  ];

  const experience = [
    {
      title: "Open Source Contributor",
      org: "sktime",
      period: "2024",
      type: "Open Source",
      achievements: [
        "Contributed multiple enhancements, including a bias-adjusted Box–Cox forecaster and a DA-RNN-based forecaster",
        "Improved robustness and validation in time-series forecasting components",
        "Experience working with reviews, CI, and production-grade ML code"
      ]
    },
    {
      title: "AI Training & Internship",
      org: "LearnNex (Powered by Wipro)",
      period: "2024",
      type: "Training + Internship",
      achievements: [
        "Built a Retrieval-Augmented Generation (RAG) based LLM application",
        "Developed a Stable Diffusion image generation pipeline",
        "Delivered two complete ML systems from model to inference"
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#ffffff' }}>
      {/* Animated background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.4 }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
        <div style={{ position: 'absolute', top: '60%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', left: '50%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s',
        background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={24} style={{ color: '#8b5cf6' }} />
            <span>Sanskar Modi</span>
          </h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['home', 'projects', 'experience', 'skills', 'contact'].map(section => (
              <a 
                key={section}
                href={`#${section}`} 
                style={{ 
                  color: activeSection === section ? '#8b5cf6' : '#9ca3af', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s',
                  fontWeight: activeSection === section ? '600' : '400',
                  textTransform: 'capitalize'
                }} 
                onMouseEnter={e => e.target.style.color = '#8b5cf6'} 
                onMouseLeave={e => e.target.style.color = activeSection === section ? '#8b5cf6' : '#9ca3af'}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1.5rem 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '9999px', border: '1px solid rgba(139, 92, 246, 0.3)', marginBottom: '2rem' }}>
              <Sparkles size={16} style={{ color: '#8b5cf6' }} />
              <span style={{ fontSize: '0.875rem', color: '#c4b5fd' }}>Open to AI/ML Engineering Roles</span>
            </div>
            
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              AI Engineer Building
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #10b981 100%)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}>
                Production AI Systems
              </span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '800px', margin: '0 auto 1rem', lineHeight: '1.8' }}>
              Specializing in <span style={{ color: '#8b5cf6', fontWeight: '600' }}>agentic AI</span>, <span style={{ color: '#3b82f6', fontWeight: '600' }}>LLM systems</span>, and <span style={{ color: '#10b981', fontWeight: '600' }}>cloud deployment</span>
            </p>
            
            <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.75' }}>
              Built production AI agent on Google Cloud Run, 99.94% accuracy medical AI, 204% returns RL trading bot, and enterprise RAG systems. Experienced with Google ADK, Docker, FastAPI, and comprehensive testing.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
              <a href="https://drive.google.com/file/d/12fUlMF4trz9mXT8QhhdAK29UO5JJCdEy/view" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{ 
                   padding: '1rem 2rem', 
                   background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', 
                   borderRadius: '0.75rem', 
                   fontWeight: '600', 
                   textDecoration: 'none', 
                   color: '#fff', 
                   transition: 'all 0.3s',
                   boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '0.5rem'
                 }}>
                <Code size={20} />
                View Resume
              </a>
              <a href="#contact" 
                 style={{ 
                   padding: '1rem 2rem', 
                   background: 'rgba(255, 255, 255, 0.05)', 
                   border: '1px solid rgba(255, 255, 255, 0.1)',
                   borderRadius: '0.75rem', 
                   fontWeight: '600', 
                   textDecoration: 'none', 
                   color: '#fff', 
                   transition: 'all 0.3s',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '0.5rem'
                 }}>
                <Mail size={20} />
                Get in Touch
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <SocialLink href="https://github.com/sanskarmodi8" icon={Github} />
              <SocialLink href="https://www.linkedin.com/in/sanskar-modi-ba53a2267/" icon={Linkedin} />
              <SocialLink href="mailto:sansyprog8@gmail.com" icon={Mail} />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <ChevronDown size={32} style={{ color: '#8b5cf6', animation: 'bounce 2s infinite' }} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '8rem 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Featured Projects
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#9ca3af', maxWidth: '700px', margin: '0 auto' }}>
              Production-ready AI systems from agentic tools to deep learning pipelines
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '8rem 1.5rem', background: 'rgba(255, 255, 255, 0.02)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Experience
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#9ca3af' }}>
              Open source contributions and industry projects
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1024px', margin: '0 auto' }}>
            {experience.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '8rem 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Technical Stack
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#9ca3af' }}>
              Tools and technologies I work with
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {skills.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '8rem 1.5rem', background: 'rgba(255, 255, 255, 0.02)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Let's Build Something Amazing
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '1rem' }}>
            Open to remote AI/ML engineering opportunities
          </p>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Looking for roles where I can apply agentic AI, LLM systems, MLOps, and cloud deployment to solve real-world problems.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <ContactButton 
              href="mailto:sansyprog8@gmail.com" 
              icon={Mail}
              text="Email Me"
              primary
            />
            <ContactButton 
              href="https://www.linkedin.com/in/sanskar-modi-ba53a2267/" 
              icon={Linkedin}
              text="LinkedIn"
            />
            <ContactButton 
              href="https://github.com/sanskarmodi8" 
              icon={Github}
              text="GitHub"
            />
          </div>

          <div style={{ padding: '2rem', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Currently pursuing</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#fff' }}>B.Tech CSE, Bennett University</p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>Expected Graduation: 2027</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            © 2025 Sanskar Modi. Crafted with React & passion for AI.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        background: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(20px)',
        borderRadius: '1.5rem',
        padding: '2rem',
        border: `1px solid ${isHovered ? project.color + '40' : 'rgba(255, 255, 255, 0.05)'}`,
        transition: 'all 0.4s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 20px 60px ${project.color}20` : 'none',
        position: 'relative'
      }}
    >
      {project.featured && (
        <div style={{ 
          position: 'absolute', 
          top: '-12px', 
          right: '20px', 
          padding: '0.375rem 1rem', 
          background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem'
        }}>
          <Cloud size={14} />
          PRODUCTION
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
        <div style={{ 
          padding: '1rem', 
          background: `${project.color}15`, 
          borderRadius: '1rem',
          border: `1px solid ${project.color}30`
        }}>
          <Icon size={28} style={{ color: project.color }} />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <IconButton href={project.liveUrl} icon={ExternalLink} />
          <IconButton href={project.githubUrl} icon={Github} />
        </div>
      </div>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>{project.title}</h3>
      <p style={{ color: project.color, fontSize: '0.875rem', marginBottom: '1rem', fontWeight: '600' }}>{project.subtitle}</p>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '0.95rem' }}>{project.description}</p>

      <div style={{ marginBottom: '1.5rem' }}>
        {project.highlights.map((highlight, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.625rem' }}>
            <div style={{ width: '8px', height: '8px', background: project.color, borderRadius: '50%', flexShrink: 0 }}></div>
            <span style={{ fontSize: '0.875rem', color: '#d1d5db' }}>{highlight}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tech.map((tech, i) => (
          <span key={i} style={{ 
            padding: '0.375rem 0.875rem', 
            background: 'rgba(255, 255, 255, 0.05)', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '0.5rem', 
            fontSize: '0.75rem', 
            color: '#e5e7eb',
            fontWeight: '500'
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ exp }) {
  return (
    <div style={{ 
      background: 'rgba(255, 255, 255, 0.02)', 
      backdropFilter: 'blur(20px)', 
      borderRadius: '1.5rem', 
      padding: '2rem', 
      border: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#c4b5fd', fontWeight: '600' }}>{exp.type}</span>
          </div>
          <h3 style={{ fontSize: '1.375rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{exp.title}</h3>
          <p style={{ color: '#8b5cf6', fontWeight: '600' }}>{exp.org}</p>
        </div>
        <span style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>{exp.period}</span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {exp.achievements.map((achievement, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
            <span style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.6' }}>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillCard({ skill }) {
  return (
    <div style={{ 
      background: 'rgba(255, 255, 255, 0.02)', 
      backdropFilter: 'blur(20px)', 
      borderRadius: '1.5rem', 
      padding: '2rem', 
      border: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '4px', height: '24px', background: skill.color, borderRadius: '2px' }}></div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{skill.category}</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {skill.items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '8px', height: '8px', background: skill.color, borderRadius: '50%', opacity: 0.6 }}></div>
            <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        padding: '0.875rem', 
        background: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)', 
        borderRadius: '1rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        transition: 'all 0.3s',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Icon size={22} style={{ color: isHovered ? '#8b5cf6' : '#9ca3af' }} />
    </a>
  );
}

function IconButton({ href, icon: Icon }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        padding: '0.625rem', 
        background: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)', 
        borderRadius: '0.5rem', 
        display: 'flex', 
        transition: 'all 0.3s',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Icon size={18} style={{ color: '#9ca3af' }} />
    </a>
  );
}

function ContactButton({ href, icon: Icon, text, primary }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        padding: '1rem 2rem',
        background: primary 
          ? (isHovered ? 'linear-gradient(135deg, #7c3aed, #2563eb)' : 'linear-gradient(135deg, #8b5cf6, #3b82f6)')
          : (isHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'),
        border: primary ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '0.75rem', 
        fontWeight: '600', 
        textDecoration: 'none', 
        color: '#fff', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem',
        transition: 'all 0.3s',
        boxShadow: primary && isHovered ? '0 10px 40px rgba(139, 92, 246, 0.3)' : 'none'
      }}
    >
      <Icon size={20} />
      {text}
    </a>
  );
}