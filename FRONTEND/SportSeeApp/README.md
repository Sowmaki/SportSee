# Projet SportSee

## Contexte
SportSee, startUp dédiée au coaching sportif, va lancer une nouvelle version de la page profil de l’utilisateur.
Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

## Maquette
[Lien vers la maquette figma:](https://www.figma.com/design/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0-1&p=f&t=ptuXJTTHX2vbpxxf-0)

## User Stories
Intégration:
[x]En tant qu’utilisateur, je veux pouvoir consulter ma page de profil sur mon ordinateur ayant une résolution d’au moins 1024 par 780 pixels.
[x]En tant qu’utilisateur, je veux que mon prénom soit affiché sur le dashboard (le prénom étant récupérée via les données de l’API via la route /user/:id).

### API:
[x] En tant que développeur, je veux pouvoir accéder aux informations de l’utilisateur via la route /user/:id. Cette route me donne des informations générales sur l’utilisateur.
[x] En tant que développeur, je veux pouvoir accéder aux données de l’activité quotidienne via la route /user/:id/activity. Cette route donne des informations sur le poids et les calories brûlées.
[x] En tant que développeur, je veux pouvoir accéder accéder à la durée moyenne des sessions via la route /user/:id/average-sessions. Cette route donne des informations sur la durée moyenne des sessions.
[x] En tant que développeur, je veux pouvoir accéder à la complétion de l’objectif de la journée via la route /user/:id. (Il manque un truc non?)Cette route donne des informations sur la complétion de l’objectif journalier.
[x] En tant que développeur, je veux pouvoir accéder aux types d’activité via la route /user/:id/performance. Cette route me donne des informations pour le radar chart.
[x] En tant que développeur, je veux pouvoir accéder aux [b]chiffres clés[/b] via la route /user/:id/activity. Cette route me donne des informations sur les calories, protéines, glucides et lipides de la journée.

### Graphiques:
[x] En tant qu’utilisateur, je veux voir mon activité quotidienne sous forme d’un BarChart. Ce dernier montre les informations relatives au poids et aux calories brûlées. L’axe des abscisses correspond aux jours du mois courant. Un tooltip apparaît au survol.
[x] En tant qu’utilisateur, je veux voir ma durée moyenne des sessions sous la forme d’un LineChart. L’axe des abscisses correspond à la durée moyenne des sessions. Un tooltip apparaît au survol.
[x] En tant qu’utilisateur, je veux voir mon type d’activité réalisée sous forme d’un radar chart.
[x] En tant qu’utilisateur, je veux voir mon score moyen sous forme d’un RadialBarChart.
[x] En tant qu’utilisateur, je veux pouvoir voir mes informations clés sous forme de card. Chaque card comprend un icône, des protéines, etc.
