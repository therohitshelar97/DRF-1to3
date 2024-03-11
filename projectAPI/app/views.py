from django.shortcuts import render
# from rest_framework.renderers import JSONRenderers
from django.http import JsonResponse
from .serializers import DataSerializers
from .models import Data
from rest_framework.parsers import JSONParser
import io
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

# Create your views here.
@csrf_exempt
@api_view(['GET','POST'])
def Show(request):
    # if request.method == "POST":
    #     json = request.body
    #     bdata = io.BytesIO(json)
    #     pythondata = JSONParser().parse(bdata)
    #     d = DataSerializers(data = pythondata)
    #     if d.is_valid():
    #         d.save()
    #         re = {'DATA':"Created Successfully"}
    #         return JsonResponse(re, content_type='application/json')

    if request.method == "POST":
        sr = DataSerializers(data = request.data)    
        if sr.is_valid():
            sr.save()
            re = {'DATA':"Created Successfully"}
            return JsonResponse(re, content_type='application/json')



    data1 = Data.objects.all()
    json_data = DataSerializers(data1,many=True)
    # print(json_data.data)
    return JsonResponse(json_data.data, safe=False)

def Delete(request,id):
    Data.objects.get(pk=id).delete()
    data = {"data":"Data Deleted successfully....."}
    return JsonResponse(data, content_type='application/json')

def UpdateFetch(request,id):
    data12 = Data.objects.get(pk=id)
    json = DataSerializers(data12)
    return JsonResponse(json.data, content_type='application/json')

@csrf_exempt   
def Update(request):
    print("Working")
    if request.method == "PUT":
        print("Working")
        json = request.body
        bdata = io.BytesIO(json)
        pythondata = JSONParser().parse(bdata)
        print(pythondata)
        id = pythondata.get('id')
        inst = Data.objects.get(pk=id)
        print(inst)
        print(pythondata)
        d = DataSerializers(inst,data = pythondata)
        if d.is_valid():
            d.save()
            data = {"data":"Data Updated"}
            return JsonResponse(data,content_type='application/json')

