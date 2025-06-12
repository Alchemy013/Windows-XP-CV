import React, { useState } from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';

const initialCV = `Rehyann Saini
+91 7701919054 | rehyannsaini@gmail.com | linkedin.com/rehyannsaini | github.com/rehyannsaini

EDUCATION
SRM University Aug. 2021 – Present
Bachelor's Degree in Computer Science Chennai, India
8.56 CGPA

TECHNICAL SKILLS
Languages: Python, C, C++, R
Frameworks & Database: Tailwind, React, Firebase, Supabase, Mysql, MongoDB
Libraries: TensorFlow, PyTorch, Keras, Scikit-Learn, Pandas, NumPy, Langchain
Developer Tools: Git, Postman, Vercel

PROFESSIONAL EXPERIENCE
Research Intern | MedTech Innovations Lab May 2024 – Aug. 2024
Developed a custom CNN-LSTM model for classifying Diabetic Foot Ulcer and Ischemia, achieving a 35% accuracy improvement using Elephant Herding Optimization, with 88% accuracy for ischemia and 87% for tissue damage.
Benchmarked pretrained models like DenseNet, ResNet, and MobileNetV2 against the custom architecture, applying advanced optimization techniques to enhance performance and reduce overfitting.

AI/ML Intern | Innosphere Ventures Nov. 2023 – Apr. 2024
Developed an ADHD treatment platform using a Transformer-based BiLSTM-Attention model with LLMs, achieving 89% accuracy in symptom detection and improved engagement.
Built a predictive pipeline with a Stacked Ensemble of CatBoost, LightGBM, and Transformer embeddings, achieving 92% accuracy in early symptom detection.

PROJECTS
Mentoo | Typescript, Supabase Ongoing
Designed and developed a platform aimed at empowering men by offering a secure and supportive space for sharing personal experiences and challenges.
Focused on fostering open dialogue, promoting mental health awareness, and addressing societal stigmas around masculinity.

InsightX | Generative AI Ongoing
Developed a Generative AI-powered web search platform using React and FastAPI, to provide real-time updates and validated sources to bridge knowledge gaps in LLMs.

Sonar Shift | Sklearn, Pandas, Numpy
Developed a logistic regression-based model for classifying underwater objects as rocks or mines using sonar signals.
Optimized signal processing and feature extraction to improve accuracy for underwater navigation and exploration.

Detection Systems |Python, YOLO, cv2, cvzone
Developed a real-time object detection system using YOLO to accurately identify and localize objects in images and video streams.
Optimized model performance for high-speed inference, enabling real-time applications in various environments.

CERTIFICATIONS
NPTEL Data Analytics with Python
Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
IBM Data Analyst Professional Certificate
Google Data Analytic
`;

export default function CV({ onClose }) {
  const [docText, setDocText] = useState(initialCV);

  const [wordWrap, setWordWrap] = useState(false);

  function onClickOptionItem(item) {
    switch (item) {
      case 'Exit':
        onClose();
        break;
      case 'Word Wrap':
        setWordWrap(!wordWrap);
        break;
      case 'Time/Date':
        const date = new Date();
        setDocText(
          `${docText}${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        );
        break;
      default:
    }
  }
  function onTextAreaKeyDown(e) {
    if (e.which === 9) {
      e.preventDefault();
      e.persist();
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      setDocText(`${docText.substring(0, start)}\t${docText.substring(end)}`);

      requestAnimationFrame(() => {
        e.target.selectionStart = start + 1;
        e.target.selectionEnd = start + 1;
      });
    }
  }

  return (
    <Div>
      <section className="np__toolbar">
        <WindowDropDowns items={dropDownData} onClickItem={onClickOptionItem} />
      </section>
      <StyledTextarea
        wordWrap={wordWrap}
        value={docText}
        onChange={e => setDocText(e.target.value)}
        onKeyDown={onTextAreaKeyDown}
        spellCheck={false}
      />
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .np__toolbar {
    position: relative;
    height: 21px;
    flex-shrink: 0;
    border-bottom: 1px solid white;
  }
`;

const StyledTextarea = styled.textarea`
  flex: auto;
  outline: none;
  font-family: 'Lucida Console', monospace;
  font-size: 13px;
  line-height: 14px;
  resize: none;
  padding: 2px;
  ${props => (props.wordWrap ? '' : 'white-space: nowrap; overflow-x: scroll;')}
  overflow-y: scroll;
  border: 1px solid #96abff;
`;
