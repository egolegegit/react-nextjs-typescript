[]: # Language: bash
[]: # Path: Dockerfile

```
docker build -t <name_app> ./
```

```
 docker run -p 3000:3000 <name_app>
```

## Deployment using container

### [Heroku](https://www.heroku.com/)

- [Create an account](https://dashboard.heroku.com/apps)
- Personal -> New -> Create new pipeline
- Pipeline -> Staging -> Add app -> Create new app
```
> heroku stack:set container -a <name-app>
```
- Settings: stack=container, Framework=Container

- Deploy -> Container registry
```
> heroku login
```
```
> heroku container:login
```
```markdown
> heroku container:push web --app <name-app>
```
```markdown
> heroku container:release web --app <name-app>
```
```markdown
> heroku open --app <name-app>
```
- Process logging
```markdown
> heroku logs --tail --app <name-app>
```




## Author
Telegram: [@egolege](https://t.me/Egolege)
