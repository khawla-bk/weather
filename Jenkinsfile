pipeline {
    agent any
    tools { nodejs "NodeJs" }
    stages {
        stage('Build') {
            steps {
                echo 'run build app'
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
