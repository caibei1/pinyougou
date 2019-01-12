package com.pinyougou.sellergoods.service;

import java.util.List;

import javax.naming.ldap.PagedResultsControl;

import com.pinyougou.pojo.TbBrand;

import entity.PageResult;


//品牌接口
public interface BrandService {

	public List<TbBrand> findAll();
	
	//品牌分页
	public PageResult findPage(int pageNum,int pageSize);
	
	//增加
	public void add(TbBrand brand);
	
	//根据id查询试题
	public TbBrand findOne(long id);
	
	//更新
	public void update(TbBrand brand);
	
	//删除
	public void delete(long[] ids);
	
	//按照条件查找
	public PageResult findPage(TbBrand brand,int pageNum,int pageSize);
	
}
