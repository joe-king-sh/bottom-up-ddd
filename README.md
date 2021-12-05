# bottom-up-ddd
「ドメイン駆動設計入門 ボトムアップでわかる」のコードをTypescriptで実践する

## 作るもの
###  SNSを題材としたユーザとサークルの機能
- ユースケース
```puml
@startuml SNS機能

left to right direction

package user {
    usecase "ユーザを登録する" as (RegisterUser)
    usecase "ユーザ名を変更する" as (ChangeName)
}

package circle {
    usecase "サークルを作成する" as (RegisterCircle)
    usecase "サークルに参加する" as (JoinCircle)
}


:User: --> (RegisterUser)
:User: --> (ChangeName)

:User: --> (RegisterCircle)
:User: --> (JoinCircle)

note right of user : ・ユーザ名は3文字以上\n・ユーザ名の重複は許されない



note right of RegisterCircle : ・サークル名は3文字以上20文字以下\n・サークル名は全てのサークルで重複しない

note right of JoinCircle : ・サークルに所属するユーザーの最大数はサークルのオーナーとなるユーザを含めて30名まで


@enduml
```

## Project Init

```zsh
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev

npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

npm install ts-node --save-dev
npm install nodemon --save-dev

```