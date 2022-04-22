namespace :deploy do
task :copy_config do

on  roles(:app) do

#execute :cp,"/var/config/#{fetch(:application)}/#{fetch(:stage)}/.enviaababa #{release_path}/"

#execute :scp,"-o LogLevel=quiet -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no deployer_user@172.13.1.176:/var/config/#{fetch(:application)}/#{fetch(:stage)}/App/Config/config.js #{release_path}/App/Config/"

execute :scp,"-o LogLevel=quiet -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no deployer_user@172.13.1.176:/var/config/#{fetch(:application)}/#{fetch(:stage)}/.env #{release_path}/"


                 execute "cd #{release_path}/ &&   sam build "

                 execute "cd #{release_path}/ &&  sam deploy --config-file samconfig.toml'"


	end
        
    end
end