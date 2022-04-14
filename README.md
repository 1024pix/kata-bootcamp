# kata-bootcamp
a repo for bootcamp katas
Le répo pour démarrer des katas en JS dans l'équipe certif.

## Récupérer le répo


La première fois, pour tout le monde :

```
$ git clone git@github.com:1024pix/kata-bootcamp.git
```

## Pour démarrer un nouveau kata

Pour le premier driver (typist), partir de la branche main (`git checkout
main`), choisir un nom de branche, par exemple `2022-01-11-mars-rover`, et :

```
$ git checkout -b 2022-01-11-mars-rover
$ git push -u origin 2022-01-11-mars-rover
```

Pour les participants :

```
$ git checkout 2022-01-11-mars-rover
```

À partir de là, on a mocha et chai et eslint installées, et un fichier test.js
qui contient un test qui échoue, on peut commencer à coder.

La nomenclature de branche proposée permet de faire le kata mars rover
plusieurs fois par exemple.

