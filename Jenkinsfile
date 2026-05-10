pipeline {
  agent any

  options {
    timestamps()
  }

  environment {
    APP_NAME = 'jenkins-hello-world'
    IMAGE_NAME = 'jenkins-hello-world:latest'
    NODE_ENV = 'production'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      agent {
        docker {
          image 'node:20-alpine'
          reuseNode true
        }
      }

      steps {
        sh 'npm ci'
      }
    }

    stage('Test') {
      agent {
        docker {
          image 'node:20-alpine'
          reuseNode true
        }
      }

      steps {
        sh 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker build -t "$IMAGE_NAME" .
          docker stop "$APP_NAME" || true
          docker rm "$APP_NAME" || true
          docker run -d --name "$APP_NAME" -p 3000:3000 --restart unless-stopped "$IMAGE_NAME"
        '''
      }
    }
  }
}
