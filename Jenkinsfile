pipeline {
  agent any

  options {
    skipDefaultCheckout(true)
    timestamps()
  }

  environment {
    APP_NAME = 'jenkins-hello-world'
    IMAGE_NAME = 'jenkins-hello-world:latest'
    NODE_ENV = 'production'
    NAME = 'testingA123'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Test Image') {
      steps {
        sh 'docker build --target test -t "$APP_NAME:test" .'
      }
    }

    stage('Verify Test Image') {
      steps {
        sh 'docker image inspect "$APP_NAME:test" >/dev/null'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker build --target production -t "$IMAGE_NAME" .
          docker stop "$APP_NAME" || true
          docker rm "$APP_NAME" || true
          docker run -d --name "$APP_NAME" -p 3000:3000 --restart unless-stopped "$IMAGE_NAME"
        '''
      }
    }
  }
}
