pipeline {
    agent any

    environment {
        def nodejsTool = tool name: 'node-20-tool', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        def dockerTool = tool name: 'docker-latest-tool', type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
        PATH = "${nodejsTool}/bin:${dockerTool}/bin:${env.PATH}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Optimized React Production Files') {
            steps {
                sh 'npm run-script build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t tucker245/react-jenkins-social:latest .
                    docker images
                '''
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'personal-docker-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                }
                sh 'docker push tucker245/react-jenkins-social:latest'
            }
        }
        stage('Deploy New Image to AWS EC2') {
            steps {
                sh 'echo "Deploying to EC2 instance..."'

                sshagent(['<NAME OF SSH CREDENTIALS>']) {
                    sh """
                        SSH_COMMAND="ssh -o StrictHostKeyChecking=no <SERVER USER>@<SERVER IP>"
                        \$SSH_COMMAND "docker stop <NAME OF CONTAINER> && docker rm <NAME OF CONTAINER>"
                        \$SSH_COMMAND "docker pull <NAME OF IMAGE>:$BUILD_NUMBER"
                        \$SSH_COMMAND "docker run -d -p 80:80 --name <NAME OF CONTAINER> <NAME OF IMAGE>:$BUILD_NUMBER"
                    """
                }
    }
}
        
    }
}
