# 🎓 Site Institucional Uniesp  

Projeto desenvolvido para a cadeira de **Tecnologias para Front-End Avançado**, com o objetivo de criar um site institucional para a faculdade Uniesp, apresentando informações sobre a instituição, cursos oferecidos, notícias e outras seções relevantes.

---

## 🚀 Tecnologias Utilizadas  
- **React** (Framework Front-End)  
- **JSON Server** (Simulação de API/REST para dados dinâmicos)  
- **Bootstrap** (Estilização responsiva)  
- **React Router DOM** (Navegação entre páginas)  
- **Axios** (Requisições HTTP para o JSON Server)  

---

## 📌 Funcionalidades  
✔ **Página Inicial**  
   - Apresentação da faculdade e destaques.  
✔ **Página de Cursos**  
   - Lista dos cursos oferecidos (consumidos do JSON Server).  
✔ **Página de Notícias**  
   - Exibição de notícias recentes da instituição (mockadas no JSON Server).  
✔ **Contato**  
   - Formulário ou informações para contato.  

---

## 🗃️ Estrutura do JSON Server (db.json)

Dados mockados das notícias (atualizados com informações reais da UNIESP):
json

```
{
  "noticias": [
    {
      "id": "1",
      "titulo": "UNIESP sedia 21º Congresso Brasileiro de Bioinformática: X-Meeting 2025",
      "texto": "Evento é organizado pela Associação Brasileira de Bioinformática e Biologia Computacional"
    },
    {
      "id": "2",
      "titulo": "UNIESP participará da 4ª Conferência Municipal de Cabedelo",
      "texto": "Evento acontece em 30 de maio, no Auditório Master da instituição."
    },
    {
      "id": "3",
      "titulo": "Especialização em Personal Training promove primeira Aula Magna",
      "texto": "No próximo sábado, 31 de maio, a pós-graduação Especialização em Personal Training: Ênfase em Performance e Grupos Especiais do UNIESP realizará a aula magna da sua primeira turma."
    }
  ],

}
```
---

## 🎨 Layout com Bootstrap
 
- Alguns componentes Boostrap utilizados:
  - `Navbar` para o menu.
  - `Cards` para exibir cursos/notícias.
  - `Grid System` para responsividade.

---

Feito por Lucas Viana