# 🌊 PROALERT — Sistema de Alerta de Enchentes com IoT

Bem-vindo ao repositório da **Landing Page do PROALERT**, um sistema inteligente de monitoramento e alerta de enchentes baseado em IoT.  
Esta página apresenta o projeto de forma visual, clara e moderna, destacando as funcionalidades, tecnologias e o potencial de impacto social da solução.

## 📌 Sobre o Projeto

O **PROALERT** mitigação de desastres depende da rapidez e precisão das informações. Por isso,
o PROALERT transforma dados de sensores ultrassônicos em indicadores confiáveis sobre o nível da água em áreas vulneráveis.

A landing page foi criada para comunicar:
- O funcionamento do sistema
- Os componentes utilizados
- As tecnologias empregadas
- As funcionalidades principais
- Evoluções futuras
- A equipe responsável pelo projeto

## 🖥️ Estrutura da Landing Page

### 1. Navegação
Links para:
- Sobre  
- Sistema  
- Funcionalidades  
- Evoluções futuras

### 2. Seção Sobre
Explica o propósito do PROALERT e sua contribuição na mitigação de desastres naturais.

### 3. Como o Sistema Funciona
Mostra o fluxo de operação:

Sensores ultrassônicos → ESP32/Arduino → API → Dashboard (Streamlit)

Inclui destaques de segurança como MFA e integridade dos dados.

### 4. Fotos do Protótipo
Imagens reais da montagem utilizando:
- Sensor ultrassônico  
- Microcontrolador ESP32/Arduino  
- Módulos e conexões  

### 5. Componentes Utilizados
- Sensor Ultrassônico HC-SR04  
- ESP32 ou Arduino  
- LED Indicador  
- Módulo Wi-Fi  
- Dashboard em Streamlit  

### 6. Funcionalidades

#### 🔍 Monitoramento Inteligente
- Medição contínua do nível da água  
- Atualização automática  
- Identificação dos estados: Normal, Atenção e Alerta  

#### 📡 Notificações ao Usuário
- Envio via API/Servidor  
- Integração com dashboards e apps  
- Comunicação via HTTP/MQTT  

#### 📊 Dashboard Online
- Visualização em tempo real  
- Gráficos de histórico  
- Interface acessível  
- Logs e atualizações  

## ⚙️ Tecnologias Utilizadas

### Hardware
- ESP32 ou Arduino  
- Sensor HC-SR04  
- Jumpers e Protoboard  
- LED RGB  

### Software
- C++ (Arduino IDE)  
- Node.js (API)  
- MongoDB (Banco de Dados)  
- Streamlit (Dashboard)  
- Render (Hospedagem)  

## 🚀 Evoluções Futuras do Sistema

- Mapa inteligente para diferenciar pontos alagados e não alagados  
- Integração modular para novos sensores  
- Energia sustentável com painéis solares  
- Comunicação via LoRaWAN ou 4G  
- Aplicativo mobile para alertas em tempo real  

## 📁 Como Usar Esta Landing Page

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/proalert.git
```
2. Baixar as dependência 
```bash
npm i 
```
3. Acesse o diretório:
```bash
cd proalert
```
3. Execute a aplicação:
```bash
npm run dev 
```


