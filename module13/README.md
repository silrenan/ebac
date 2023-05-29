### Testes End to End - Ebac Shop
Exercício para os alunos de Qualidade de software da EBAC, para automatização de testes de API para cumprimento do módulo 13, conforme disponibilizado pela EBAC via: (https://lms.ebaconline.com.br/lesson/d72bb7a4-145d-42ae-895f-2633e6fec262).

newman

sirenan-ebac-qa-m13

❏ 1-cenario-positivo
↳ 1-listar-usuarios
  GET http://localhost:3000/usuarios [200 OK, 735B, 33ms]
  ✓  Status code is 200

↳ 2-criar-usuario
  POST http://localhost:3000/usuarios [201 Created, 568B, 6ms]
  ✓  Status code is 201

↳ 3-listar-usuarios-id
  GET http://localhost:3000/usuarios/0ygLk1740yjAL2RA [200 OK, 642B, 5ms]
  ✓  Status code is 200

↳ 4-editar-usuario-id
  PUT http://localhost:3000/usuarios/0ygLk1740yjAL2RA [200 OK, 531B, 4ms]
  ✓  Status code is 200

↳ 5-deletar-usuario-id
  DELETE http://localhost:3000/usuarios/0ygLk1740yjAL2RA [200 OK, 532B, 4ms]
  ✓  Status code is 200

❏ 2-cenario-negativo
↳ 6-criar-usuario-sem-payload
  POST http://localhost:3000/usuarios [400 Bad Request, 665B, 3ms]
  ✓  Status code is 400

↳ 7-editar-usuario-email-usado
  PUT http://localhost:3000/usuarios/prIUsIf7auG1lSDSD [400 Bad Request, 543B, 4ms]
  ✓  Status code is 400

┌─────────────────────────┬──────────────────┬─────────────────┐
│                         │         executed │          failed │
├─────────────────────────┼──────────────────┼─────────────────┤
│              iterations │                1 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│                requests │                7 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│            test-scripts │                7 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│      prerequest-scripts │                0 │               0 │
├─────────────────────────┼──────────────────┼─────────────────┤
│              assertions │                7 │               0 │
├─────────────────────────┴──────────────────┴─────────────────┤
│ total run duration: 170ms                                    │
├──────────────────────────────────────────────────────────────┤
│ total data received: 823B (approx)                           │
├──────────────────────────────────────────────────────────────┤
│ average response time: 8ms [min: 3ms, max: 33ms, s.d.: 10ms] │
└──────────────────────────────────────────────────────────────┘
