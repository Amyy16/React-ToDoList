pipeline {
    agent any
    
    tools {
        nodejs "NodeJs" // Name of Node.js installation in Jenkins
    }
    
    
    stages {
        
        stage('Checkout') {
             steps {
                git branch: 'main',
                url: 'https://github.com/bigcephas1/React-ToDoList.git'
            }
        }
        stage ("change directory to dive-react-app"){
            steps {
                dir('dive-react-app') {
                echo " installing all frontend dependencies"   
                sh 'npm install'
                echo "running lint for application"
                sh 'npm run lint'
                echo "running the build"
                sh 'npm run build'
             }
            }
        }
        stage ("change directory to the backend"){
            steps {
                dir('backend') {
    echo "installing backend dependencies"
    sh 'npm install'
    echo "starting the backend server"
    sh ' npm start'
}
            }      
    
    post {
        always {
            cleanWs() // Clean workspace
        }
        success {
            emailext (
                subject: "SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                body: "The build ${env.BUILD_URL} completed successfully.",
                to: "ukpabipeteru@gmail.com"
            )
        }
        failure {
            emailext (
                subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                body: "The build ${env.BUILD_URL} failed. Please check the logs.",
                to: "ukpabipeteru@gmail.com"
            )
        }
    }
}
    }
}