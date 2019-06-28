
pushd ..
yarn 

rm -fr public

yarn build

popd

! kubectl delete -f gke.yaml

docker build -t gcr.io/welldone-deployments/welldone-gatsby ..

docker push gcr.io/welldone-deployments/welldone-gatsby

kubectl apply -f gke.yaml

