pipeline {
    agent none
    stages {
        stage('master_build') {
            when {
                branch 'master'
            }
            agent {
                 label selectAgent()
            }
            steps {
                script {
                    docker.build('arsis-master-org:latest')
                }
                 script {
                    // sh 'docker run -itd --name  arsis-org-ui --network arsis -p 3001:3001 arsis-org-ui:latest'
                     sh "docker compose -f /home/app/docker-compose.yml up -d --no-deps --build arsis-master-org"
                }
                script {
                   sh 'docker image prune -f'
                }
            }
        }
        stage('dev_build') {
            when {
                branch 'dev'
            }
            agent {
                label selectAgent()
            }
            steps {
               
                script {
                    docker.build('arsis-master-org:latest')
                }
                 script {
                    // sh 'docker run -itd --name  arsis-org-ui --network arsis -p 3001:3001 arsis-org-ui:latest'
                      sh "docker compose -f /home/app/docker-compose.yml up -d --no-deps --build arsis-master-org"
                }
                script {
                   sh 'docker image prune -f'
                }
            }
        }
        stage('fix_Build') {
            when {
                branch 'fix'
            }
            agent {
                 label selectAgent()
            }
           steps {
                
                script {
                    docker.build('arsis-master-org:latest')
                }
                 script {
                   //sh 'docker run -itd --name  arsis-org-ui --network arsis -p 3001:3001 arsis-org-ui:latest'
                      sh "docker compose -f /home/app/docker-compose.yml up -d --no-deps --build arsis-master-org"
                }
                script {
                   sh 'docker image prune -f'
                }
            }
        }
    }
}

def selectAgent() {
    def branchName = env.BRANCH_NAME

    if (branchName == 'master') {
        return 'front_docky'
    } else if (branchName == 'dev') {
        return 'docky_dev'
    } else if (branchName == 'fix') {
        return 'docky_dev'
    } else {
        return 'docky_dev'
    }
}
