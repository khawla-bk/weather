pipeline {
    agent any
    tools { nodejs "NodeJs" }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'ng build --prod'
            }
        }
        stage('test') {
            steps {
                echo 'testing app'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploy app'
            }
        }
    }
}
