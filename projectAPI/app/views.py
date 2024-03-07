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
